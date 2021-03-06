class Debit < Statement
  audited
  has_one :transfer, dependent: :destroy

  validates :date, :value, presence: true

  after_initialize do
    self.date ||= Date.today
  end
end
