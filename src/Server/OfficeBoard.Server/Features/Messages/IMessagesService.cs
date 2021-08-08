namespace OfficeBoard.Server.Features.Messages
{
    using System.Threading.Tasks;

    public interface IMessagesService
    {
        public Task<int> Create(string title, string content, string imageUrl, string userId);
    }
}
