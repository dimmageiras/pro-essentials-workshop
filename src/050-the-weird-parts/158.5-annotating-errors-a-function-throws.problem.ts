/**
 * How do we annotate the errors this function throws?
 */

type PossibleErrors = SyntaxError | DOMException;

const getUserFromLocalStorage = (
  id: string
): Partial<{
  data: Record<PropertyKey, unknown> | undefined;
  error: PossibleErrors;
}> => {
  try {
    const user = localStorage.getItem(id);

    if (!user) {
      return {
        data: undefined,
      };
    }

    return { data: JSON.parse(user) };
  } catch (error) {
    if (error instanceof SyntaxError || error instanceof DOMException) {
      return { error };
    }

    throw error;
  }
};

const user = getUserFromLocalStorage("user-1");

if (user.error) {
  user.error;
} else {
  user.data;
}
