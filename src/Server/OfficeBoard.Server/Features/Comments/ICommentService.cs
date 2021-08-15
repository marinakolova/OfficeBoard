namespace OfficeBoard.Server.Features.Comments
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using OfficeBoard.Server.Features.Comments.Models;

    public interface ICommentService
    {
        Task<int> Create(string content, int taskId, string userId);

        Task<bool> Delete(int id, string userId);

        Task<int> GetCount();

        Task<int> GetTodayCount();

        Task<int> GetMonthCount();

        Task<IEnumerable<CommentViewModel>> GetAll();

        Task<IEnumerable<CommentViewModel>> GetAllByTask(int taskId);

        Task<IEnumerable<CommentViewModel>> GetAllByUser(string userId);

        Task<CommentViewModel> GetById(int id);
    }
}
