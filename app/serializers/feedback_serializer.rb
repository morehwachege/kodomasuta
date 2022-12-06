class FeedbackSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :question_id
end
