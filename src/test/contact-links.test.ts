import { describe, expect, it } from "vitest";

import { getContactLinks } from "@/content/portfolio";

describe("contact links", () => {
  it("links the email address with mailto", () => {
    const [email] = getContactLinks({ email: "adisaputralol40@gmail.com", linkedin: "", github: "" });
    expect(email!.href).toBe("mailto:adisaputralol40@gmail.com");
  });

  it("turns a LinkedIn address without https into a full link", () => {
    const [, linkedin] = getContactLinks({
      email: "",
      linkedin: "www.linkedin.com/in/adi-saputra-network",
      github: "",
    });
    expect(linkedin!.href).toBe("https://www.linkedin.com/in/adi-saputra-network");
  });

  it("never links a contact that has not been provided", () => {
    const [, , github] = getContactLinks({ email: "a@b.co", linkedin: "", github: "" });
    expect(github!.href).toBeNull();
    expect(github!.display).toBe("To be added");
  });
});
