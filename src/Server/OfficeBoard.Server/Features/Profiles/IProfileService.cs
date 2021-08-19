namespace OfficeBoard.Server.Features.Profiles
{
    using System.Threading.Tasks;

    using OfficeBoard.Server.Features.Profiles.Models;
    using OfficeBoard.Server.Infrastructure.Services;

    public interface IProfileService
    {
        Task<ProfileResponseModel> ByUser(string userId);

        Task<Result> Update(
            string userId,
            string name,
            string position,
            string department);
    }
}
