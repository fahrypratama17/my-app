"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";

export function useImageUploadPreview() {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    setUploadedFiles(files.map((file) => file.name));

    setPreviewUrls((previousUrls) => {
      previousUrls.forEach((url) => URL.revokeObjectURL(url));
      return files.map((file) => URL.createObjectURL(file));
    });
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return {
    uploadedFiles,
    previewUrls,
    fileInputRef,
    handleFileChange,
    openFilePicker,
  };
}

