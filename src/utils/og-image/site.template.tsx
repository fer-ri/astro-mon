import { Site } from "@/config";

export default () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        fontFamily: "Poppins",
        padding: "4rem",
        backgroundColor: "#111827",
        borderWidth: "1rem",
        borderColor: "#374151",
        lineHeight: 1,
      }}
    >
      <div
        style={{
          color: "#fff",
          fontSize: "6rem",
          fontWeight: 700,
        }}
      >
        {Site.title}
      </div>
      <div
        style={{
          fontSize: "2.25rem",
          color: "#6b7280",
        }}
      >
        {Site.deployedUrl}
      </div>
    </div>
  );
};
