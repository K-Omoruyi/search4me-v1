# search-for-me-fe-pjt-26

# DESCRIPTION
This is a cross-platform application designed to allow people to report missing persons. This would contribute towards solving the growing problem of missing persons by providing a central avenue for people with valid and valuable information to submit reports which would help relevant agencies in the search for missing persons while also updating users on the progress of cases which they have reported.

# IMPLEMENTATION SUGGESTIONS
-A user opens the platform and submits a case with detailed information about the missing person (e.g name, age, picture, address and last seen location, etc) and the reporter's contact details (e.g name, email/phone number) 

-Each submitted request is assigned a case ID and unique reference code 

-A mail(or SMS) is sent to the reporter with the case ID and unique reference code -Admin recieves and verifies the request, and updates the record with new evidence as the investigation progresses 

-The user can view the case by submitting the case ID and unique reference code, for security purposes

# TASK TRACKING
-Github project 

-1 person per track will manage each repo, while every other member will fork the repo and make a pull request.

# DEPLOYMENT
-To be handled by one person per track on any platform of choice 

-There should be a test and live URL/enviroment. The test URL/environment is the first place where the deployment should happen. Once the track to consume or test the the test URL are fine with the changes made, push the changes to the live URL.

# SUGGESTION
-Have 2 branches; dev for the dev environment and main for the live environment.

# TRACKS
-UI/UX -Frontend -Backend

# CONTRIBUTION GUIDE
-Fork the repository

-Clone and then open it up on your prefered code editor: git clone https://github.com/zuri-training/search-for-me-design-be-pjt-26.git

-Open terminal and set upsream branch: git remote add upstream https://github.com/zuri-training/search-for-me-design-be-pjt-26.git

-Pull upstream: git pull upstream main

-Create a new branch for the task your are doing eg: git checkout -b dev

-After making changes, do: git add

-Commit your changes with a descriptive commit message: git commit -m "commit message"

-To make sure there are no conflicts: git pull upstream main

-Push changes to your new branch: git push origin your-current-branch-name

-Create a pull request to the main branch
