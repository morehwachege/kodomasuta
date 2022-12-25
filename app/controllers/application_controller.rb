class ApplicationController < ActionController::API
    before_action :authorized

    SECRET = 'kodom@suta'

    # encode the payload
    def encode_token(payload)
        JWT.encode(payload, SECRET)
    end

    # get the jwt token from the header request
    def authentication
        request.headers['Authorization']
    end

    # decode the jwt token
    def decoded_token
        if authentication
            token = authentication.split(' ')[1]
            begin
                JWT.decode(token, SECRET, true, { algorithm: 'HS256' })
            rescue JWT::DecodeError
                nil
            end
        end
    end

    # get current user
    def current_user
        if decoded_token
            user_id = decoded_token[0]['user_id']
            User.find(user_id)
        end
    end


    def logged_in?
        # current_user.present?
        !!current_user
    end

    def authorized
        render json: { message: "Please log in"}, status: :unauthorized unless logged_in?
    end

end
