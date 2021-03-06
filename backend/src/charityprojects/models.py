from django.db import models
from accounts.models import User
# Create your models here.
from prize.models import Prize


class CharityProjects(models.Model):
    objects = None
    name = models.CharField(max_length=100)
    goal = models.TextField(default="")
    mission = models.TextField(default="")
    category = models.CharField(max_length=50)
    video_name = models.CharField(max_length=30, null=True)
    video = models.FileField(upload_to='upload/video/project_video/', null=True)
    badge = models.ImageField(upload_to='upload/image/project_badge/', null=True)
    tags = models.TextField(default="")
    banner = models.ImageField(upload_to='upload/image/project_banner/', null=True)

    def __str__(self):
        return self.name

    def get_project_name(self):
        return self.name

    def get_project_video(self):
        return self.video

    def get_project_goal(self):
        return self.goal

    def get_project_badge(self):
        return self.badge

    def get_project_banner(self):
        return self.banner


class ProjectUser(models.Model):
    objects = None
    project = models.ForeignKey(CharityProjects, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    invited_by = models.EmailField(null=True, blank=True)
    date_joined = models.DateField(null=True, blank=True)
    date_started = models.DateField(null=True, blank=True) # should not be null will update when start project method is fixed
    goal_date = models.DateField(null=True, blank=True)
    challenge_status = models.CharField(max_length=100, blank=True)
    project_status = models.CharField(max_length=100, blank=True)
    adventure_id = models.IntegerField(blank=True, null=True)

    class Meta:
        unique_together = ('project', 'user')

    def __str__(self):
        return '{} {} {}'.format(self.project, self.user, self.invited_by)

    def fetch_invited_by(self, inviter_id):
        user_email = User.objects.get(pk=inviter_id)
        return user_email


class ProjectUserDetails(models.Model):
    objects = None
    project_user = models.ForeignKey(ProjectUser, on_delete=models.CASCADE, null=True)
    prize_given = models.ForeignKey(Prize, on_delete=models.CASCADE, null=True)
    video = models.FileField(upload_to='upload/video/invitation_video', null=True)

    def __str__(self):
        return '{} {} {} '.format(self.project_user,  self.prize_given, self.video)


class LearnNewSkill(models.Model):
    objects = None
    new_skill = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    video = models.FileField(upload_to='upload/video/challenge_video', null=True)
    project_user = models.ForeignKey(ProjectUser, on_delete=models.CASCADE, null=True)

    class Meta:
        unique_together = ('new_skill', 'project_user')

    def __str__(self):
        return '{} {} {} {}'.format(self.new_skill, self.description, self.video, self.project_user)


class UserInvitation(models.Model):
    objects = None
    project = models.ForeignKey(CharityProjects, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    friend_id = models.IntegerField(blank=True)
    status = models.CharField(max_length=255, blank=True, null=True)
    prize_given = models.ForeignKey(Prize, on_delete=models.CASCADE, null=True)
    invitation_message = models.TextField(blank=True)
    invitation_date = models.DateField(null=True, blank=True) #should not be empty

    def __str__(self):
        return '{} {} {} {} {} {}'.format(self.project, self.user, self.friend_id, self.status, self.prize_given,
                                          self.invitation_message, self.invitation_date)


class UnregisterInvitation(models.Model):
    objects = None
    project_user = models.ForeignKey(ProjectUser, on_delete=models.CASCADE, null=True)
    unregister_user_emailId = models.CharField(max_length=100, null=True)
    prize_given = models.ForeignKey(Prize, on_delete=models.CASCADE, null=True)
    invitation_message = models.TextField(blank=True)

    def __str__(self):
        return '{} {} {} {}'.format(self.project_user, self.unregister_user_emailId, self.prize_given, self.invitation_message)


class VolunteerTime(models.Model):
    objects = None
    project_user = models.ForeignKey(ProjectUser, on_delete=models.CASCADE, null=True)
    organisation_name = models.CharField(max_length=100, blank=True)
    organisation_address = models.CharField(max_length=100, blank=True)
    organisation_city = models.CharField(max_length=50, blank=True)
    organisation_state = models.CharField(max_length=50, blank=True)
    organisation_website = models.CharField(max_length=200, blank=True)
    volunteer_hours = models.IntegerField(blank=True)
    volunteer_work_description = models.TextField(blank=True)
    volunteer_exp = models.FileField(upload_to='upload/video/volunteer_exp', null=True)

    def __str__(self):
        return '{} {} {} {} {} {} {} {} {}'.format(self.project_user, self.organisation_name, self.organisation_address,
                                                   self.organisation_city, self.organisation_state,
                                                   self.organisation_website, self.volunteer_hours,
                                                   self.volunteer_work_description, self.volunteer_exp)


class DevelopNewHabit(models.Model):
    objects = None
    new_habit = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    video = models.FileField(upload_to='upload/video/challenge_video', null=True)
    project_user = models.ForeignKey(ProjectUser, on_delete=models.CASCADE, null=True)

    class Meta:
        unique_together = ('new_habit', 'project_user')

    def __str__(self):
        return '{} {} {} {}'.format(self.new_habit, self.description, self.video, self.project_user)


class SpreadWord(models.Model):
    objects = None
    project_user = models.ForeignKey(ProjectUser, on_delete=models.CASCADE, null=True)
    invitee_count = models.IntegerField(blank=True)

    def __str__(self):
        return '{} {}'.format(self.project_user, self.invitee_count)


class GiveDonation(models.Model):
    objects = None
    project_user = models.ForeignKey(ProjectUser, on_delete=models.CASCADE, null=True)
    organisation_name = models.CharField(max_length=100, blank=True)
    organisation_address = models.CharField(max_length=100, blank=True)
    organisation_city = models.CharField(max_length=50, blank=True)
    organisation_state = models.CharField(max_length=50, blank=True)
    organisation_website = models.CharField(max_length=200, blank=True)
    donation_details = models.TextField(blank=True, null=True)
    donation_exp = models.FileField(upload_to='upload/video/volunteer_exp', null=True, blank=True)

    def __str__(self):
        return '{} {} {} {} {} {} {} {}'.format(self.project_user, self.organisation_name, self.organisation_address,
                                                self.organisation_city, self.organisation_state,
                                                self.organisation_website, self.donation_details, self.donation_exp)


class Fundraise(models.Model):
    objects = None
    project_user = models.ForeignKey(ProjectUser, on_delete=models.CASCADE, null=True)
    organisation_name = models.CharField(max_length=100, blank=True)
    organisation_address = models.CharField(max_length=100, blank=True)
    organisation_city = models.CharField(max_length=50, blank=True)
    organisation_state = models.CharField(max_length=50, blank=True)
    organisation_website = models.CharField(max_length=200, blank=True)
    fundraise_details = models.TextField(blank=True, null=True)
    fundraise_amount = models.IntegerField(blank=True)
    fundraise_exp = models.FileField(upload_to='upload/video/volunteer_exp', null=True, blank=True)

    def __str__(self):
        return '{} {} {} {} {} {} {} {} {}'.format(self.project_user, self.organisation_name, self.organisation_address,
                                                   self.organisation_city, self.organisation_state,
                                                   self.organisation_website, self.fundraise_details,
                                                   self.fundraise_amount, self.fundraise_exp)