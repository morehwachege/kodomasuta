class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.create!(user_params)
    if user.valid?
      # no need to create session 
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end
# show method get /me
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user, status: :ok
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def update 
    user = User.find_by(id: params[:id])
    # byebug
    user.update!(user_params)
    # byebug
    render json: user, status: :created
  end


  private
  def user_params
    params.permit(:email, :password, :first_name, :last_name)
  end
end
