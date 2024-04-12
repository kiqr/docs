# Kiqr::Services::Invitations::Create

The `Kiqr::Services::Invitations::Create` service class is crafted to facilitate the process of sending invitations within the Kiqr platform. It encapsulates the logic for saving an invitation and sending out an invitation email.

## Usage

To utilize this service, you need to supply an instance of an invitation and a user. The service will then attempt to save the invitation and, in the future, send an invitation email.

```ruby
@invitation = current_account.account_invitations.new(invitation_params)

if @invitation.valid?
  Kiqr::Services::Invitations::Create.call!(invitation: @invitation, user: current_user)
  kiqr_flash_message(:notice, :invitation_sent, email: @invitation.email)
  redirect_to account_invitations_path(account_id: current_account)
else
  render :new, status: :unprocessable_entity
end
```

## Parameters

- **invitation**: An instance of the invitation you are attempting to send. This should be a new, unsaved ActiveRecord object.
- **user**: The user responsible for sending the invitation. This should be a persisted ActiveRecord object, indicating the sender of the invitation.

## Behavior

Upon invocation, the service attempts to save the provided invitation within a database transaction and send an invitation email to the recipient.
