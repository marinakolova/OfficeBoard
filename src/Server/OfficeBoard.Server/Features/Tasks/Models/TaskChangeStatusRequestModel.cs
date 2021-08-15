namespace OfficeBoard.Server.Features.Tasks.Models
{
    public class TaskChangeStatusRequestModel
    {
        public int Id { get; set; }

        public int Status { get; set; }
    }
}
