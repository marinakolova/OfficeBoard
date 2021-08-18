namespace OfficeBoard.Server.Data.Seeding
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using OfficeBoard.Server.Data.Seeding.CustomSeeders;

    public class OfficeBoardDbContextSeeder : ISeeder
    {
        public async Task SeedAsync(OfficeBoardDbContext dbContext, IServiceProvider serviceProvider)
        {
            if (dbContext == null)
            {
                throw new ArgumentNullException(nameof(dbContext));
            }

            if (serviceProvider == null)
            {
                throw new ArgumentNullException(nameof(serviceProvider));
            }

            var seeders = new List<ISeeder>
                          {
                              new UsersSeeder(),
                              new ProfilesSeeder(),
                              new MessagesSeeder(),
                              new TasksSeeder(),
                              new CommentsSeeder(),
                          };

            foreach (var seeder in seeders)
            {
                await seeder.SeedAsync(dbContext, serviceProvider);
            }
        }
    }
}
