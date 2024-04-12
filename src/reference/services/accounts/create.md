# Kiqr::Services::Accounts::Create

The `Kiqr::Services::Accounts::Create` service class is designed to streamline the creation of accounts within the Kiqr platform. It supports the instantiation of both personal and team accounts, depending on the needs of the user.

## Usage

To use this service, you must provide an instance of an account, a user, and a flag indicating whether the account to be created is personal.

```ruby
@account = Account.new(account_params)

if @account.valid?
  Kiqr::Services::Accounts::Create.call!(account: @account, user: current_user)
  redirect_to dashboard_path(account_id: @account)
else
  render :new, status: :unprocessable_entity
end
```

## Parameters

- **account**: An instance of the account you wish to create. This should be an unsaved ActiveRecord object.
- **user**: The user associated with the account creation. This should be a persisted ActiveRecord object.
- **personal**: A boolean flag (true or false) indicating whether the account being created is a personal account.

## Behavior

**Personal Account:** If `personal` is set to `true`, the service checks if the user already has a personal account. If so, it raises a StandardError. Otherwise, it marks the provided account as personal and associates it with the user.

**Team Account:** If `personal` is set to `false`, the service creates a team account, assigning the provided user as the owner.

## Error handling

Errors during account creation (e.g., if the user already has a personal account) are raised as `StandardError`.
