# Kiqr::Services::Accounts::Update

The `Kiqr::Services::Accounts::Update` service class facilitates the update process for accounts within the Kiqr platform. It ensures that only authorized users can update account details, supporting both personal and team accounts.

## Usage

To update an account, provide an instance of the account to be updated and the user attempting the update.

```ruby
@account.assign_attributes(account_params)

if @account.valid?
  Kiqr::Services::Accounts::Update.call!(account: @account, user: current_user)
  redirect_to edit_account_path
else
  render :edit, status: :unprocessable_entity
end
```

## Parameters

- **account**: An instance of the account you wish to update. This should be a persisted ActiveRecord object.

- **user**: The user attempting to update the account. This should also be a persisted ActiveRecord object.

## Behavior

- **Permission Check:** The service first verifies that the provided user has the necessary permissions to update the account. A user is allowed to update their personal account or any team account they are part of.

- **Update and Save:** If the permission check passes, the account is then saved with the provided updates.

## Error handling

If the user does not have the necessary permissions to update the account, a `StandardError` is raised with the message "User does not have permission to edit this account."
