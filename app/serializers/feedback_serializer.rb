class FeedbackSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :feedback_question
end
