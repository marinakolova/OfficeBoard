namespace OfficeBoard.Server.Features.Profiles
{
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Mvc;
    using OfficeBoard.Server.Features.Profiles.Models;
    using OfficeBoard.Server.Infrastructure.Services;

    using static OfficeBoard.Server.Infrastructure.WebConstants;

    public class ProfilesController : ApiController
    {
        private readonly IProfileService profileService;
        private readonly ICurrentUserService currentUser;

        public ProfilesController(
            IProfileService profileService,
            ICurrentUserService currentUser)
        {
            this.profileService = profileService;
            this.currentUser = currentUser;
        }

        [HttpGet]
        public async Task<ProfileViewModel> ByUser()
            => await this.profileService.ByUser(this.currentUser.GetId());

        [HttpGet]
        [Route("user/{username}")]
        public async Task<ProfileViewModel> ByUsername(string username)
        {
            return await this.profileService.ByUsername(username);
        }

        [HttpGet]
        [Route(Id)]
        public async Task<ProfileViewModel> Details(string id)
        {
            return await this.profileService.ByUser(id);
        }

        [HttpPut]
        public async Task<ActionResult> Update(UpdateProfileRequestModel model)
        {
            var userId = this.currentUser.GetId();

            var result = await this.profileService.Update(
                userId,
                model.Email,
                model.UserName,
                model.Name,
                model.Position,
                model.Department);

            if (result.Failure)
            {
                return this.BadRequest(result.Error);
            }

            return this.Ok();
        }
    }
}
