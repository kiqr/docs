# Kiqr::Services::Invitations::Reject

The `Kiqr::Services::Invitations::Reject` service class is crafted to facilitate the process of rejecting invitations within the Kiqr platform. It encapsulates the logic for rejecting an invitation and removing the invitation from the system.

## Usage

To utilize this service, you need to supply an instance of an invitation and a user. The service will then attempt to reject the invitation.

```ruby
@invitation = AccountInvitation.find_puid!(params[:id])
Kiqr::Services::Invitations::Reject.call!(invitation: @invitation, user: current_user)
kiqr_flash_message(:alert, :invitation_rejected, account: @invitation.account.name)
redirect_to dashboard_path
```

## Parameters

- **invitation**: An instance of the invitation you are attempting to send. This should be a new, unsaved ActiveRecord object.
- **user**: The user that is rejecting the invitation. This should be a persisted ActiveRecord object, indicating the recipient of the invitation.
