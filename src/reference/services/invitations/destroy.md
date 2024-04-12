# Kiqr::Services::Invitations::Destroy

The `Kiqr::Services::Invitations::Destroy` service class is designed to efficiently handle the deletion of invitations within the Kiqr platform. It provides a streamlined approach to ensure the safe removal of an invitation entity, with the operation performed within a database transaction to maintain data integrity.

## Usage

This service requires an instance of an invitation and the user performing the delete operation. It attempts to destroy the given invitation and ensures that the operation is wrapped in a transaction for safety.

```ruby
@invitation = current_account.account_invitations.find_puid!(params[:id])
Kiqr::Services::Invitations::Destroy.call!(invitation: @invitation, user: current_user)
redirect_to account_invitations_path, notice: t(".deleted")
```

## Parameters

- **invitation:** An instance of the invitation you wish to delete. This should be a persisted ActiveRecord object.
- **user:** The user attempting to delete the invitation. This ensures that only authorized users can perform delete operations, enhancing security.

## Behavior

The service wraps the deletion process in a transaction, ensuring that any related records or side effects are handled atomically.
