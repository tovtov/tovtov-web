import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Pagination, PaginationProps } from "./pagination";

const prev = "Previous";
const next = "Next";

describe("Pagination", () => {
  it("renders with startOfPages", () => {
    const mockProps: PaginationProps = {
      currentPage: 1,
      totalPages: 4,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    expect(screen.getByText("1")).toBeDefined();
    expect(screen.getByText("2")).toBeDefined();
    expect(screen.getByText("3")).toBeDefined();
    expect(screen.getByText(next)).toBeDefined();
    expect(screen.getByText(prev)).toBeDefined();
  });
  it("renders with endOfPages", () => {
    const mockProps: PaginationProps = {
      currentPage: 4,
      totalPages: 4,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    expect(screen.getByText("2")).toBeDefined();
    expect(screen.getByText("3")).toBeDefined();
    expect(screen.getByText("4")).toBeDefined();
    expect(screen.getByText(next)).toBeDefined();
    expect(screen.getByText(prev)).toBeDefined();
  });
  it("renders with middleOfPages, pages 1,2,3", () => {
    const mockProps: PaginationProps = {
      currentPage: 2,
      totalPages: 4,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    expect(screen.getByText("1")).toBeDefined();
    expect(screen.getByText("2")).toBeDefined();
    expect(screen.getByText("3")).toBeDefined();
    expect(screen.getByText(next)).toBeDefined();
    expect(screen.getByText(prev)).toBeDefined();
  });
  it("renders with middleOfPages, pages 2,3,4", () => {
    const mockProps: PaginationProps = {
      currentPage: 3,
      totalPages: 4,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    expect(screen.getByText("4")).toBeDefined();
    expect(screen.getByText("2")).toBeDefined();
    expect(screen.getByText("3")).toBeDefined();
    expect(screen.getByText(next)).toBeDefined();
    expect(screen.getByText(prev)).toBeDefined();
  });
  it("renders with displayOnlyCurrentPage. page number 1 displayed", () => {
    const mockProps: PaginationProps = {
      currentPage: 1,
      totalPages: 2,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    expect(screen.getByText("1")).toBeDefined();
    expect(screen).not.toContain("2");
    expect(screen.getByText(next)).toBeDefined();
    expect(screen.getByText(prev)).toBeDefined();
  });
  it("renders with displayOnlyCurrentPage. page number 2 displayed", () => {
    const mockProps: PaginationProps = {
      currentPage: 2,
      totalPages: 2,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    expect(screen.getByText("2")).toBeDefined();
    expect(screen).not.toContain("1");
    expect(screen.getByText(next)).toBeDefined();
    expect(screen.getByText(prev)).toBeDefined();
  });
  it("setCurrentPage called with exact number clicked on", () => {
    const mockProps: PaginationProps = {
      currentPage: 2,
      totalPages: 4,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    fireEvent.click(screen.getByText("3"));
    expect(mockProps.setCurrentPage).toBeCalledWith(3);
  });
  it("uses setCurrentPage to increase from 1 to 2", () => {
    const mockProps: PaginationProps = {
      currentPage: 1,
      totalPages: 4,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    fireEvent.click(screen.getByText(next));
    expect(mockProps.setCurrentPage).toBeCalledWith(2);
  });
  it("uses setCurrentPage to increase from 2 to 3", () => {
    const mockProps: PaginationProps = {
      currentPage: 2,
      totalPages: 4,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    fireEvent.click(screen.getByText(next));
    expect(mockProps.setCurrentPage).toBeCalledWith(3);
  });
  it("uses setCurrentPage to increase from 3 to 4", () => {
    const mockProps: PaginationProps = {
      currentPage: 3,
      totalPages: 4,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    fireEvent.click(screen.getByText(next));
    expect(mockProps.setCurrentPage).toBeCalledWith(4);
  });
  it("setCurrentPage wont increase over page number. setCurrentPage should not be called", () => {
    const mockProps: PaginationProps = {
      currentPage: 4,
      totalPages: 4,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    fireEvent.click(screen.getByText(next));
    expect(mockProps.setCurrentPage).not.toBeCalled();
  });

  it("renders page 4 and uses setCurrentPage to decrease tp page 3", () => {
    const mockProps: PaginationProps = {
      currentPage: 4,
      totalPages: 4,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    fireEvent.click(screen.getByText(prev));
    expect(mockProps.setCurrentPage).toBeCalledWith(3);
  });
  it("renders page 3 and uses setCurrentPage to decrease to page 2", () => {
    const mockProps: PaginationProps = {
      currentPage: 3,
      totalPages: 4,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    fireEvent.click(screen.getByText(prev));
    expect(mockProps.setCurrentPage).toBeCalledWith(2);
  });
  it("renders page 2 and uses setCurrentPage to decrease to page 1", () => {
    const mockProps: PaginationProps = {
      currentPage: 2,
      totalPages: 4,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    fireEvent.click(screen.getByText(prev));
    expect(mockProps.setCurrentPage).toBeCalledWith(1);
  });
  it("setCurrentPage wont decrease passed page 1. setCurrentPage should not be called", () => {
    const mockProps: PaginationProps = {
      currentPage: 1,
      totalPages: 4,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    fireEvent.click(screen.getByText(prev));
    expect(mockProps.setCurrentPage).not.toBeCalled();
  });
  it("renders with multiple pages 1,2,3 | currentpage = 1", () => {
    const mockProps: PaginationProps = {
      currentPage: 1,
      totalPages: 4,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    expect(screen.getByText("1")).toBeDefined();
    expect(screen.getByText("2")).toBeDefined();
    expect(screen.getByText("3")).toBeDefined();
    expect(screen.getByText(next)).toBeDefined();
    expect(screen.getByText(prev)).toBeDefined();
  });
  it("renders with multiple pages 1,2,3 | currentpage = 2", () => {
    const mockProps: PaginationProps = {
      currentPage: 2,
      totalPages: 4,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    expect(screen.getByText("1")).toBeDefined();
    expect(screen.getByText("2")).toBeDefined();
    expect(screen.getByText("3")).toBeDefined();
    expect(screen.getByText(next)).toBeDefined();
    expect(screen.getByText(prev)).toBeDefined();
  });
  it("renders with multiple pages 2,3,4 | currentpage = 3", () => {
    const mockProps: PaginationProps = {
      currentPage: 3,
      totalPages: 4,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    expect(screen.getByText("2")).toBeDefined();
    expect(screen.getByText("3")).toBeDefined();
    expect(screen.getByText("4")).toBeDefined();
    expect(screen.getByText(next)).toBeDefined();
    expect(screen.getByText(prev)).toBeDefined();
  });
  it("renders with less than 3 pages. Shows current page 1 abut not page 2", () => {
    const mockProps: PaginationProps = {
      currentPage: 1,
      totalPages: 2,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    expect(screen.getByText("1")).toBeDefined();
    expect(screen).not.toContain("2");
    expect(screen.getByText(next)).toBeDefined();
    expect(screen.getByText(prev)).toBeDefined();
  });
  it("renders with less than 3 pages. Shows current page 2 but not page 1", () => {
    const mockProps: PaginationProps = {
      currentPage: 2,
      totalPages: 2,
      setCurrentPage: jest.fn(),
    };
    render(<Pagination {...mockProps}></Pagination>);
    expect(screen.getByText("2")).toBeDefined();
    expect(screen).not.toContain("1");
    expect(screen.getByText(next)).toBeDefined();
    expect(screen.getByText(prev)).toBeDefined();
  });
});
