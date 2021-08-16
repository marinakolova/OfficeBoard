namespace OfficeBoard.Server.Data.Seeding.CustomSeeders
{
    using System;
    using System.Linq;

    using OfficeBoard.Server.Data.Models;

    public class CommentsSeeder : ISeeder
    {
        public async System.Threading.Tasks.Task SeedAsync(OfficeBoardDbContext dbContext, IServiceProvider serviceProvider)
        {
            if (dbContext.Comments.Any())
            {
                return;
            }

            var comments = new Comment[]
            {
                new Comment
                {
                    Content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    TaskId = dbContext.Tasks.OrderBy(x => x.Id).FirstOrDefault().Id,
                    UserId = dbContext.Users.OrderBy(x => x.Id).FirstOrDefault().Id,
                },
                new Comment
                {
                    Content = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    TaskId = dbContext.Tasks.OrderBy(x => x.Id).FirstOrDefault().Id,
                    UserId = dbContext.Users.OrderBy(x => x.Id).LastOrDefault().Id,
                },
                new Comment
                {
                    Content = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    TaskId = dbContext.Tasks.OrderBy(x => x.Id).FirstOrDefault().Id,
                    UserId = dbContext.Users.OrderBy(x => x.Id).FirstOrDefault().Id,
                },
                new Comment
                {
                    Content = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    TaskId = dbContext.Tasks.OrderBy(x => x.Id).FirstOrDefault().Id,
                    UserId = dbContext.Users.OrderBy(x => x.Id).LastOrDefault().Id,
                },
                new Comment
                {
                    Content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    TaskId = dbContext.Tasks.OrderBy(x => x.Id).LastOrDefault().Id,
                    UserId = dbContext.Users.OrderBy(x => x.Id).FirstOrDefault().Id,
                },
                new Comment
                {
                    Content = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    TaskId = dbContext.Tasks.OrderBy(x => x.Id).LastOrDefault().Id,
                    UserId = dbContext.Users.OrderBy(x => x.Id).LastOrDefault().Id,
                },
                new Comment
                {
                    Content = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    TaskId = dbContext.Tasks.OrderBy(x => x.Id).LastOrDefault().Id,
                    UserId = dbContext.Users.OrderBy(x => x.Id).FirstOrDefault().Id,
                },
                new Comment
                {
                    Content = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    TaskId = dbContext.Tasks.OrderBy(x => x.Id).LastOrDefault().Id,
                    UserId = dbContext.Users.OrderBy(x => x.Id).LastOrDefault().Id,
                },
            };

            await dbContext.AddRangeAsync(comments);
            await dbContext.SaveChangesAsync();
        }
    }
}
