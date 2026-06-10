export type ContactEnquiryPayload = {
  email: string;
  fullName: string;
  message: string;
  phone?: string;
  subject: string;
};

export type ContactEnquirySubmission = ContactEnquiryPayload & {
  createdAt: string;
  id: string;
  source: "website-contact-form";
  status: "new";
};

export type ContactEnquirySaveResult =
  | {
      submission: ContactEnquirySubmission;
      success: true;
    }
  | {
      message: string;
      success: false;
    };

type ContactEnquiryRepository = {
  save(payload: ContactEnquiryPayload): Promise<ContactEnquirySaveResult>;
};

const storageKey = "cifacu_contact_enquiries";

function getStoredSubmissions() {
  const storedValue = window.localStorage.getItem(storageKey);

  if (!storedValue) {
    return [] as ContactEnquirySubmission[];
  }

  try {
    const parsedValue = JSON.parse(storedValue);

    if (!Array.isArray(parsedValue)) {
      return [] as ContactEnquirySubmission[];
    }

    return parsedValue as ContactEnquirySubmission[];
  } catch {
    return [] as ContactEnquirySubmission[];
  }
}

const localStorageContactEnquiries: ContactEnquiryRepository = {
  async save(payload) {
    try {
      const submission: ContactEnquirySubmission = {
        ...payload,
        createdAt: new Date().toISOString(),
        id:
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        source: "website-contact-form",
        status: "new",
      };

      window.localStorage.setItem(
        storageKey,
        JSON.stringify([submission, ...getStoredSubmissions()]),
      );

      return {
        submission,
        success: true,
      };
    } catch {
      return {
        message: "Your enquiry could not be saved locally. Please try again.",
        success: false,
      };
    }
  },
};

export const contactEnquiryRepository = localStorageContactEnquiries;
