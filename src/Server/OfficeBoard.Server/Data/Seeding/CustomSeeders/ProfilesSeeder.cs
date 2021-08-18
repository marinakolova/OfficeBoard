namespace OfficeBoard.Server.Data.Seeding.CustomSeeders
{
    using System;
    using System.Linq;

    using OfficeBoard.Server.Data.Models;

    public class ProfilesSeeder : ISeeder
    {
        public async System.Threading.Tasks.Task SeedAsync(OfficeBoardDbContext dbContext, IServiceProvider serviceProvider)
        {
            if (dbContext.Profiles.Any())
            {
                return;
            }

            var profiles = new Profile[]
            {
                new Profile
                {
                    UserId = dbContext.Users.OrderBy(x => x.Id).FirstOrDefault().Id,
                    Name = "Test User",
                    Position = "Project Manager",
                    Department = "Test Department",
                },
                new Profile
                {
                    UserId = dbContext.Users.OrderBy(x => x.Id).LastOrDefault().Id,
                    Name = "Seeded User",
                    Position = "CTO",
                    Department = "Seeded Department",
                },
            };

            await dbContext.AddRangeAsync(profiles);
            await dbContext.SaveChangesAsync();
        }
    }
}
