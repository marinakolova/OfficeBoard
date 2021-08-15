namespace OfficeBoard.Server.Features.Messages
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using OfficeBoard.Server.Features.Messages.Models;

    public interface IMessageService
    {
        Task<int> Create(string title, string content, string userId);

        Task<bool> Update(int id, string title, string content, string userId);

        Task<bool> Delete(int id, string userId);

        Task<int> GetCount();

        Task<int> GetTodayCount();

        Task<int> GetMonthCount();

        Task<IEnumerable<MessageViewModel>> GetAll();

        Task<IEnumerable<MessageViewModel>> GetAllByUser(string userId);

        Task<MessageViewModel> GetById(int id);
    }
}
