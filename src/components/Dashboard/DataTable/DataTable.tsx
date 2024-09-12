import React, { useEffect, useState, useMemo } from 'react';
import { useStreamify } from '../../../context/StreamifyContext';
import { SortableStreamDataColumns, StreamData } from '../../../../types/streamifyContract';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DataTable: React.FC = () => {
  const { state } = useStreamify();
  const { ref, inView } = useInView({ threshold: 0.1 }); // Update this line

  const [sortConfig, setSortConfig] = useState<
    { column: SortableStreamDataColumns['key']; direction: 'asc' | 'desc' }[]
  >([]);

  const sortedData = useMemo(() => {
    return [...state.recentStreams.data].sort((a, b) => {
      for (const sort of sortConfig) {
        if (a[sort.column] < b[sort.column]) return sort.direction === 'asc' ? -1 : 1;
        if (a[sort.column] > b[sort.column]) return sort.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [state.recentStreams.data, sortConfig]);

  useEffect(() => {
    const initialSortConfig = state.recentStreams.columns
      .filter((column) => column.sortable)
      .map((column) => ({ column: column.key, direction: 'asc' as const }));
    setSortConfig(initialSortConfig);
  }, [state.recentStreams.columns]);

  const handleSort = (column: SortableStreamDataColumns) => {
    if (!column.sortable) return;

    setSortConfig((prevConfig) => {
      const newConfig = prevConfig.filter((item) => item.column !== column.key);
      const newDirection = prevConfig[0]?.column === column.key && prevConfig[0]?.direction === 'asc' ? 'desc' : 'asc';
      return [{ column: column.key, direction: newDirection }, ...newConfig];
    });
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {inView && (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Recent Streams</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  {state.recentStreams.columns.map((column) => (
                    <th
                      key={column.key}
                      scope="col"
                      className={`px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider ${
                        column.sortable ? 'cursor-pointer' : ''
                      }`}
                      onClick={() => handleSort(column)}
                    >
                      {column.key}
                      {column.sortable && (
                        <span className="ml-1">
                          {sortConfig.findIndex((config) => config.column === column.key) === 0
                            ? sortConfig[0].direction === 'asc'
                              ? '▲'
                              : '▼'
                            : '-'}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {sortedData.map((stream, index) => (
                  <tr key={index}>
                    {state.recentStreams.columns.map((column) => (
                      <td
                        key={column.key}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100"
                      >
                        {column.key === 'dateStreamed'
                          ? new Date(stream[column.key]).toLocaleString()
                          : stream[column.key as keyof StreamData]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default DataTable;
