namespace OfficeBoard.Server.Features.Messages
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IMessagesService
    {
        public Task<int> Create(string title, string content, string imageUrl, string userId);

        public Task<IEnumerable<MessageListingResponseModel>> GetAllByUser(string userId);
    }
}
