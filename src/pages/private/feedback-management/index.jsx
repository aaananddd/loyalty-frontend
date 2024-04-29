import UserFeedacks from "./user-feedback";
const FeedbackManagementPage = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-between p-8 ">
          <h1 className="font-semibold text-2xl mb-3 ">Recent User Feedbacks</h1>
          
          <UserFeedacks />
        </div>
      </div>
      <div className="px-4 my-4 space-y-2 mb-24">
      </div>
    </div>
  );
};

export default FeedbackManagementPage;
