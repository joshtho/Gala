class UsersController < ApplicationController
    def index
        render json: User.all, status: :ok
    end

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user 
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
