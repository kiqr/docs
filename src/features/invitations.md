# Team invitations

KIQR's invitation functionality allows users to invite others to join their teams, enhancing collaboration and resource sharing. The process involves creating, sending, and managing invitations through two main controller actions: `Accounts::InvitationsController` for team admins or authorized users, and `Users::InvitationsController` for invitees.

<div class="tip custom-block" style="padding-top: 8px">

Invitations are not tied to specific email addresses, allowing anyone with the invitation link to join the team after signing in or creating an account.

</div>

## Sending invitations

Invitations are sent via email, containing a unique link for the recipient to accept or reject the invitation. The invitation link is generated using the `user_invitation_url` helper, which requires the invitation public_id as a parameter. This id is automatically generated upon invitation creation and stored in the `public_uid` column of the `AccountInvitation` model.

## Accepting an invitation

When the recipient accepts the invitation, they are prompted to create an account or log in if they already have one. The invitation is then associated with the user's account, granting them access to the team's resources.

## Notes

Invitations are not tied to specific email addresses, allowing anyone with the invitation link to join the team after signing in or creating an account. This design choice ensures flexibility and ease of use, especially in scenarios where users may have multiple email addresses or share the invitation link with others. However, it is essential to maintain the confidentiality of invitation links to prevent unauthorized access.
