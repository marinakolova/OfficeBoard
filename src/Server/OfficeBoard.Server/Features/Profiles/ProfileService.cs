namespace OfficeBoard.Server.Features.Profiles
{
    using System.Linq;
    using System.Threading.Tasks;

    using Microsoft.EntityFrameworkCore;
    using OfficeBoard.Server.Data;
    using OfficeBoard.Server.Data.Models;
    using OfficeBoard.Server.Features.Profiles.Models;
    using OfficeBoard.Server.Infrastructure.Services;

    public class ProfileService : IProfileService
    {
        private readonly OfficeBoardDbContext data;

        public ProfileService(OfficeBoardDbContext data) => this.data = data;

        public async Task<ProfileResponseModel> ByUser(string userId)
            => await this.data
                .Users
                .Where(u => u.Id == userId)
                .Select(u => new ProfileResponseModel
                {
                    UserId = u.Id,
                    Email = u.Email,
                    UserName = u.UserName,
                    Name = u.Profile.Name,
                    Position = u.Profile.Position,
                    Department = u.Profile.Department,
                })
                .FirstOrDefaultAsync();

        public async Task<Result> Update(
            string userId,
            string name,
            string position,
            string department)
        {
            var user = await this.data
                .Users
                .Include(u => u.Profile)
                .FirstOrDefaultAsync(p => p.Id == userId);

            if (user == null)
            {
                return "User does not exist.";
            }

            if (user.Profile == null)
            {
                user.Profile = new Profile();
            }

            this.ChangeProfile(
                user.Profile,
                name,
                position,
                department);

            await this.data.SaveChangesAsync();

            return true;
        }

        private void ChangeProfile(
            Profile profile,
            string name,
            string position,
            string department)
        {
            if (profile.Name != name)
            {
                profile.Name = name;
            }

            if (profile.Position != position)
            {
                profile.Position = position;
            }

            if (profile.Department != department)
            {
                profile.Department = department;
            }
        }
    }
}
