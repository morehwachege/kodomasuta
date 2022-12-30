class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.create!(user_params)
    if user.valid?
      session[:user_email] = user.email
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end
# show method get /me
  def show
    user = User.find_by(email: session[:user_email])
    if user
      render json: user, status: :ok
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end


  private
  
  def user_params
    params.permit(:email, :password)
  end
end
