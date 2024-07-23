namespace EventBus.Messages.Common
{
    public class BaseIntegrationEvent 
    {
        public string CorrelationId { get; set; }
        public DateTime CreationDate { get; private set; }
        public BaseIntegrationEvent()
        {
            CorrelationId = Guid.NewGuid().ToString();
            CreationDate = DateTime.UtcNow;
        }
        public BaseIntegrationEvent(Guid corelationId, DateTime creationDate)
        {
            CorrelationId = corelationId.ToString();
            CreationDate = creationDate;
        }
    }
}
