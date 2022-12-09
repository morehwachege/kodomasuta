class AddFeedbackToQuestions < ActiveRecord::Migration[6.1]
  def change
    add_column :questions, :feedback, :string
  end
end
