# Kiqr::Services::Invitations::Accept

The `Kiqr::Services::Invitations::Accept` service class is crafted to facilitate the process of accepting invitations within the Kiqr platform. It encapsulates the logic for accepting an invitation and associating the user with the account.

## Usage

To utilize this service, you need to supply an instance of an invitation and a user. The service will then attempt to accept the invitation and associate the user with the account.

```ruby
@invite = AccountInvitation.find_puid!(params[:id])
Kiqr::Services::Invitations::Accept.call!(invitation: @invite, user: current_user)
kiqr_flash_message(:notice, :invitation_accepted, account: @invite.account.name)
redirect_to dashboard_path(account_id: @invite.account)
```

## Parameters

- **invitation**: An instance of the invitation you are attempting to send. This should be a new, unsaved ActiveRecord object.
- **user**: The user that is accepting the invitation. This should be a persisted ActiveRecord object, indicating the recipient of the invitation.
