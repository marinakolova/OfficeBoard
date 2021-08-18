namespace OfficeBoard.Server.Features.Comments
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using Microsoft.EntityFrameworkCore;
    using OfficeBoard.Server.Data;
    using OfficeBoard.Server.Data.Models;
    using OfficeBoard.Server.Features.Comments.Models;

    public class CommentService : ICommentService
    {
        private readonly OfficeBoardDbContext data;

        public CommentService(OfficeBoardDbContext data)
            => this.data = data;

        public async Task<int> GetTodayCount()
            => await this.data
                .Comments
                .Where(x => x.CreatedOn.Date == DateTime.UtcNow.Date)
                .CountAsync();

        public async Task<int> GetMonthCount()
            => await this.data
                .Comments
                .Where(x => x.CreatedOn.Month == DateTime.UtcNow.Month)
                .CountAsync();

        public async Task<int> GetYearCount()
            => await this.data
                .Comments
                .Where(x => x.CreatedOn.Year == DateTime.UtcNow.Year)
                .CountAsync();

        public async Task<IEnumerable<CommentResponseModel>> GetAllByTask(int taskId)
            => await this.data
                .Comments
                .Where(x => x.TaskId == taskId)
                .Select(x => new CommentResponseModel
                {
                    Id = x.Id,
                    Content = x.Content,
                    TaskId = x.TaskId,
                    TaskTitle = x.Task.Title,
                    CreatedOn = x.CreatedOn,
                    UserId = x.UserId,
                    UserName = x.User.UserName,
                })
                .OrderByDescending(x => x.CreatedOn)
                .ToListAsync();

        public async Task<CommentResponseModel> GetById(int id)
            => await this.data
                .Comments
                .Where(x => x.Id == id)
                .Select(x => new CommentResponseModel
                {
                    Id = x.Id,
                    Content = x.Content,
                    TaskId = x.TaskId,
                    TaskTitle = x.Task.Title,
                    CreatedOn = x.CreatedOn,
                    UserId = x.UserId,
                    UserName = x.User.UserName,
                })
                .FirstOrDefaultAsync();

        public async Task<int> Create(string content, int taskId, string userId)
        {
            var comment = new Comment
            {
                Content = content,
                TaskId = taskId,
                UserId = userId,
            };

            this.data.Add(comment);
            await this.data.SaveChangesAsync();

            return comment.Id;
        }

        public async Task<bool> Update(int id, string content, string userId)
        {
            var message = await this.GetCommentByIdAndUserId(id, userId);

            if (message == null)
            {
                return false;
            }

            message.Content = content;

            await this.data.SaveChangesAsync();

            return true;
        }

        public async Task<bool> Delete(int id, string userId)
        {
            var comment = await this.GetCommentByIdAndUserId(id, userId);

            if (comment == null)
            {
                return false;
            }

            this.data.Comments.Remove(comment);
            await this.data.SaveChangesAsync();

            return true;
        }

        private async Task<Comment> GetCommentByIdAndUserId(int id, string userId)
            => await this.data
                .Comments
                .Where(x => x.Id == id && x.UserId == userId)
                .FirstOrDefaultAsync();
    }
}
