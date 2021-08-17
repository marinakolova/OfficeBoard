namespace OfficeBoard.Server.Features.Profiles
{
    using System.Threading.Tasks;

    using OfficeBoard.Server.Features.Profiles.Models;
    using OfficeBoard.Server.Infrastructure.Services;

    public interface IProfileService
    {
        Task<ProfileViewModel> ByUser(string userId);

        Task<ProfileViewModel> ByUsername(string username);

        Task<Result> Update(
            string userId,
            string email,
            string userName,
            string name,
            string position,
            string department);
    }
}
