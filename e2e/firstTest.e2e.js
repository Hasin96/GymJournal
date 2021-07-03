import {HomePage} from './Pages/homePage';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('Should show new workout', async () => {
    const homePage = new HomePage();
    const workoutFormPage = homePage.addWorkout();
    workoutFormPage.fillInWorkoutInfo("Novice Program", ["M", "W", "F"], "Alternating");
    workoutFormPage.save();
    await expect(element(by.text("Novice Program"))).toBeVisible();
    await expect(element(by.text("M W F"))).toBeVisible();
  });

})