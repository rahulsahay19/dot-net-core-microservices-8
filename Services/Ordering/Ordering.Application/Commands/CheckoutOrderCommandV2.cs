using MediatR;

namespace Ordering.Application.Commands
{
    public class CheckoutOrderCommandV2 : IRequest<int>
    {
        public string? UserName { get; set; }
        public decimal? TotalPrice { get; set; }
    }
}
