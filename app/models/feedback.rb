class Feedback < ApplicationRecord

    validates :title, presence: true
    validates :content, presence: true
    validates :question_id, presence: true
    
    belongs_to :question

    def feedback_question
        if question
            question 
        else
            "no feedback for this question"
        end
    end

end
