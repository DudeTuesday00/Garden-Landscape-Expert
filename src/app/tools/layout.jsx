import ToolJsonLd from '../../components/tools/shared/ToolJsonLd.jsx'

export default function ToolsLayout({ children }) {
  return (
    <>
      <ToolJsonLd />
      {children}
    </>
  )
}
