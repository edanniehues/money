# == Schema Information
#
# Table name: statements
#
#  id                  :integer          not null, primary key
#  name                :string
#  type                :string
#  date                :datetime
#  value               :decimal(8, 2)
#  account_id          :integer
#  recurring_credit_id :integer
#  category_id         :integer
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
# Indexes
#
#  index_statements_on_account_id           (account_id)
#  index_statements_on_category_id          (category_id)
#  index_statements_on_recurring_credit_id  (recurring_credit_id)
#

require 'test_helper'

class StatementTest < ActiveSupport::TestCase
	test 'search scope should not return statements with no name' do
	  	assert_equal 0, users(:user3).statements.search('Named').to_a.select{|s| s.name.nil?}.count
	end
end
