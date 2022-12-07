class Feedback < ApplicationRecord
<<<<<<< HEAD

    validates :title, presence: true
    validates :content, presence: true
    validates :question_id, presence: true
    
=======
    belongs_to :question
>>>>>>> ft-assessments
end
