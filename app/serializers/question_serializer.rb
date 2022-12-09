class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question, :choice1, :choice2, :choice3, :correct_answer, :feedback, :assessment_id
end
