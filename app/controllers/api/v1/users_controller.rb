class Api::V1::UsersController < ApplicationController

  skip_before_action :authorize, only: [:create]

  def create
    user = User.create(user_params)
    if user.valid?
        render json: { user: UserSerializer.new(user) }, status: :created
    else
        render json: { error: 'failed to create user' }, status: :unprocessable_entity
    end
end
# render the profile
def profile
  render json: user
end

private

def user_params
     params.require(:user).permit(:password, :email)
end
end
