class Feedback < ApplicationRecord

    validates :title, presence: true
    validates :content, presence: true
    validates :question_id, presence: true
    
end
