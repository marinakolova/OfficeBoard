namespace OfficeBoard.Server.Features.Comments
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using OfficeBoard.Server.Features.Comments.Models;

    public interface ICommentService
    {
        Task<int> GetTodayCount();

        Task<int> GetMonthCount();

        Task<int> GetYearCount();

        Task<IEnumerable<CommentViewModel>> GetAllByTask(int taskId);

        Task<CommentViewModel> GetById(int id);

        Task<int> Create(string content, int taskId, string userId);

        Task<bool> Update(int id, string content, string userId);

        Task<bool> Delete(int id, string userId);
    }
}
