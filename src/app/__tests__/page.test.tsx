import { beforeAll, expect, test } from "vitest";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import Page from "@/app/page";
import apiServices from "@/app/components/test/queryClient";
import AxiosMockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import React from "react";
import { aw } from "vitest/dist/chunks/reporters.anwo7Y6a.js";

const mock = new AxiosMockAdapter(axios);

// test('Page', () => {
//   render(<Page />)
//   expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
// })

const queryClient = new QueryClient();

const MockProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test("should run", async () => {
  try {
    mock.onPost("https://countries.trevorblades.com/").reply(200, {
      data: {
        countries: [
          {
            code: "AD",
          },
        ],
      },
    });

    // Queries
    const query = renderHook(
      () =>
        useQuery({
          queryKey: ["todos"],
          queryFn: () => {
            return apiServices.query({
              countries: {
                code: true,
              },
            });
          },
        }),
      {
        wrapper: MockProvider,
      }
    );

    await waitFor(() => expect(query.result.current.isSuccess).toBe(true));
    console.log(`[LOG] 🟢 Response  :`, query.result.current.data);
  } catch (error) {
    console.log(`[LOG] 🟠  error :`, error);
  }
});
