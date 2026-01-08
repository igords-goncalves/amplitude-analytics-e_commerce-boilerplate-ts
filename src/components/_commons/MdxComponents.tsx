export const MdxComponents = {
  h1: (props: any) => <h1 className="text-4xl font-bold my-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold my-3" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-semibold my-2" {...props} />,
  p: (props: any) => <p className="my-2 leading-7" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside my-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside my-2" {...props} />,
  code: (props: any) => <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props} />,
  pre: (props: any) => <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4" {...props} />,
};

export default MdxComponents;