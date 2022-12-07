class AssessmentsController < ApplicationController


    def index
        @assessment = Assessment.all 
        render json: @assessment, status: :ok
    end
end
