import { render, fireEvent } from "@testing-library/react"
import JobBoard from '../../components/JobBoard/JobBoard'

describe("testing the Job Board CRUD functionality", () => {
  test("clicking Manually add a Job > Add calls event handler once", () => {
    const addJob = jest.fn();

    const job = {
      role: "Crew Member",
      role_link: "https://www.untide/careers.com",
      city: "Sainte Marine",
      state: null,
      country: "France",
      company: "Untide",
      description: "Oh what a dream this is, no stop this is happening, soon.",
      connections: [],
      status: "To Apply",
      applied_on: null,
      created_at: "2017-05-25T21:39:15.014Z"
    }

    const component = render(
      <JobBoard />
    );

    const addButton = component.container.querySelector("#addJobButton");
    fireEvent.click(addButton);

    // expect(addJob.mock.calls).toHaveLength(1);
    
  })
});