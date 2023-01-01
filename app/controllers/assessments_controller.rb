class AssessmentsController < ApplicationController
    skip_before_action :authorized, only: :index 

    def index
        @assessment = Assessment.all 
        render json: @assessment, status: :ok
    end
end
